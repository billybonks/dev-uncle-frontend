import DS from 'ember-data';
import { attr, hasMany } from '@ember-decorators/data';
const { Model } = DS;

export default class Organisation extends Model {
    @attr('string') name;
    @attr('string') avatar;
    @hasMany repos;
}
