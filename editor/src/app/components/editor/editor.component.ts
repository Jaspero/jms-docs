import {AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormBuilderComponent, FormBuilderData} from '@jaspero/form-builder';
import loader, {Monaco} from '@monaco-editor/loader';
import {BehaviorSubject} from 'rxjs';
import {FORM_BUILDER_DATA} from '../../shared/consts/form-builder-data.const';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements AfterViewInit {

  constructor(
    private renderer: Renderer2,
    private snack: MatSnackBar
  ) {
  }

  @Input()
  code: string;

  @ViewChild('editor')
  editor: ElementRef<HTMLDivElement>;

  @ViewChild('fb')
  formBuilder: FormBuilderComponent;

  monaco: Monaco;
  monacoEditor: any;
  monacoOptions: {
    [key: string]: any;
  } = {
    automaticLayout: true,
    minimap: {enabled: false},
    autoIndent: true,
    theme: 'vs-dark',
    language: 'typescript'
  };

  data$ = new BehaviorSubject<FormBuilderData>({
    value: {},
    schema: {},
    layout: {},
    definitions: {}
  } as FormBuilderData);

  ngAfterViewInit(): void {

    // this.fbData = this.data ? JSON.parse(this.data) : {
    //   schema: {
    //     properties: {
    //       name: {
    //         type: 'string'
    //       }
    //     }
    //   },
    //   definitions: {
    //     name: {
    //       label: 'NAME',
    //       component: {
    //         type: 'input'
    //       }
    //     }
    //   }
    // };

    const element = this.renderer.createElement('div');

    this.renderer.appendChild(this.editor.nativeElement, element);

    loader.init().then((monaco: Monaco) => {

      this.monacoOptions.value = this.code || `const data = {
  schema: {
    properties: {
      name: {
        type: 'string'
      }
    }
  },
  definitions: {
    name: {
      label: 'Name'
    }
  }
}`;

      this.monaco = monaco;

      monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.ES2016,
        allowNonTsExtensions: true,
        moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
        module: monaco.languages.typescript.ModuleKind.CommonJS,
        noEmit: true
      });

      monaco.languages.typescript.typescriptDefaults.addExtraLib(FORM_BUILDER_DATA, 'index.d.ts');
      monaco.languages.json.jsonDefaults.setDiagnosticsOptions({enableSchemaRequest: true});

      this.monacoEditor = monaco.editor.create(element, this.monacoOptions);
      this.monacoEditor.focus();

      setTimeout(() => {
        this.updateOptions({
          tabSize: 2
        });
      });

      // setTimeout(() => {
      //   const compile = this.renderer.createElement('button');
      //
      //   compile.classList.add('compile');
      //   compile.innerHTML = 'HELLOOO WORLD';
      //
      //   this.renderer.appendChild(element, compile);
      // });
    });
  }

  updateOptions(options: {[key: string]: any} = {}) {
    if (this.monacoEditor) {
      this.monacoEditor.updateOptions(options);

      if (options.language) {
        this.monaco.editor.setModelLanguage(this.monacoEditor?.getModel(), options.language);
      }
    } else {
      this.monacoOptions = {
        ...this.monacoOptions,
        ...options
      };
    }
  }

  compile() {
    const code = (this.monacoEditor?.getValue().replace('const data = ', '') || '{}').trim();

    console.log(code);

    let data: Partial<FormBuilderData & {layout: any}> = {
      value: {},
      schema: {},
      layout: {},
      definitions: {}
    };

    try {
      const compile = Function(`return ${code}`);

      data = {
        ...data,
        ...compile()
      };

      console.log({data});

      if (data?.layout?.instance?.segments) {
        data.segments = data.layout.instance.segments;
      }
    } catch (error) {
      console.log(error);
      this.snack.open(error.message || 'Invalid Schema Provided!', 'Dismiss', {
        duration: 3000
      });
    }

    const validate = this.formBuilder?.validate(data as FormBuilderData);

    if (validate?.error) {
      this.snack.open(validate.message, 'Dismiss', {
        duration: 3000
      });
    }

    this.data$.next((validate && validate.error) ?
      {
        schema: {},
        value: {}
      } : data as FormBuilderData
    );

    // return {
    //   ...field,
    //   fb: (validate && validate.error) ?
    //     {
    //       schema: {},
    //       value: {}
    //     } : data as FormBuilderData
    // };
  }
}
