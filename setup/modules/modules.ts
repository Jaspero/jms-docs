import {FIELDS_METADATA_MODULE} from './fields-metadata.module';
import {FIELDS_MODULE} from './fields.module';
import {INTERFACES_MODULE} from './interfaces.module';
import {ROLES_MODULE} from './roles.module';
import {USER_INVITES_MODULE} from './user-invites.module';
import {USERS_MODULE} from './users.module';
import {WIKI_MODULE} from './wiki.module';

/**
 * Schemas for all of the modules
 */
export const MODULES = [
  USERS_MODULE,
  ROLES_MODULE,
  USER_INVITES_MODULE,

  FIELDS_MODULE,
  FIELDS_METADATA_MODULE,
  INTERFACES_MODULE,
  WIKI_MODULE
];
