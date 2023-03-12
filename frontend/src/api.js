import { JsonApi, Resource } from '@transifex/jsonapi';

export class MagazineApi extends JsonApi {
  static HOST = '/_api';
}

class Article extends Resource {
  static TYPE = 'articles';
}
MagazineApi.register(Article, 'Article');

export const magazineApi = new MagazineApi({ auth: ' ' });
