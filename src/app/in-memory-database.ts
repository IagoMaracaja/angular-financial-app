import { InMemoryDbService } from "angular-in-memory-web-api";

import { Category } from "./pages/categories/shared/category.model";
import { Entry } from "./pages/entries/shared/entry.model";

export class InMemoryDatabase implements InMemoryDbService{
    createDb(){
        const categories: Category[] = [
            {id: 1, name: "Moradia", description: "Pagamentos de Contas da Casa"},
            {id: 2, name: "Saúde", description: "Plano de Saúde e Remédios"},
            {id: 3, name: "Lazer", description: "Cinema, parques, praoa, etc"},
            {id: 4, name: "Salário", description: "Recebimento de Salário"},
            {id: 5, name: "Freelas", description: "Trabalhos como Freelancer"}
        ];

        const entries: Entry[] = [
            { id: 1, name: "Gás de Cozinha", categoryId: categories[0].id, category: categories[0], paid: true, date: "14/10/2018", amount: "70,80", type: "expense", description: "Teste" } as Entry,
            { id: 2, name: "Suplementos", categoryId: categories[1].id, category: categories[1], paid: false, date: "14/10/2018", amount: "179,90", type: "expense", description: "Teste" } as Entry,
            { id: 3, name: "Salário na empresa X", categoryId: categories[3].id, category: categories[4], paid: true, date: "14/10/2018", amount: "1280,50", type: "revenue", description: "Teste" } as Entry,
            { id: 4, name: "Aluguel de Filme", categoryId: categories[4].id, category: categories[3], paid: true, date: "14/10/2018", amount: "10,00", type: "expense", description: "Teste" } as Entry,
            { id: 5, name: "Uber", categoryId: categories[5].id, category: categories[1], paid: false, date: "14/10/2018", amount: "370,00", type: "expense", description: "Teste" } as Entry
        ];

        return {categories, entries}
    }
    
}