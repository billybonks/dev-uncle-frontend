import DS from 'ember-data';
import { attr } from '@ember-decorators/data';
const { Model } = DS;

export default class OrganisationModel extends Model {
    @attr('string') name;
    @attr('string') avatar;
}
