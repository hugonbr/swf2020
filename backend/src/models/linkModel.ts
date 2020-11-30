import Sequelize, { Optional, Model } from 'sequelize';
import { Link } from './link'; //Seq vai ter as regras do type
import database from '../database';

// interface para quando criar um novo link, o id seja opcional
interface ILinkCreationAttributes extends Optional<Link, "id"> { }

export interface ILinkModel extends Model<Link, ILinkCreationAttributes>, Link { }

const linkModel = database.define<ILinkModel>('link', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    url: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    code: {
        type: Sequelize.STRING(20),
        unique: true,
        allowNull: false
    },
    hits: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    }
})

export default linkModel;