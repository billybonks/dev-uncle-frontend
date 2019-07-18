import DS from 'ember-data';

const {
 Model, attr, hasMany,
} = DS;


export default class Organisation extends Model {
    @attr('string') name;
    @attr('string') avatar;
    @hasMany() repos;
}
