import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
    try {
        const contacts = await readContacts();
        return contacts;
    } catch (error) {
        console.error("Kişiler okunurken bir hata oluştu:", error.message);
        return [];
    }
};

console.log('Tüm kişiler:');
console.log(await getAllContacts());
