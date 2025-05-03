import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
    try {
        const contacts = await readContacts();
        return contacts.length;
    } catch (error) {
        console.error("Kişi sayısı hesaplanırken bir hata oluştu:", error.message);
        return 0;
    }
};

console.log('Toplam kişi sayısı:', await countContacts());
