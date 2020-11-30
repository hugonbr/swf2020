import linkModel, { ILinkModel } from './linkModel';
import { Link } from './link';

//Operações do banco de dados
//1)Encontrar o link pelo código
function findByCode(code: string) {
    return linkModel.findOne<ILinkModel>({ where: { code } });
}

//2)Adicionar um novo link
function add(link: Link) {
    return linkModel.create<ILinkModel>(link);
}

//3)Atualizar os hits já existentes

async function hit(code: string) {
    const link = await findByCode(code);
    if (!link) return null;

    link.hits!++;
    await link.save();
    return link;
}

export default {
    findByCode,
    add,
    hit
}