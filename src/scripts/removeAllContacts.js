import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeAllContacts = async () => {
    try {
        // Mevcut kişi sayısını alalım
        const contacts = await readContacts();
        const count = contacts.length;
        
        // Boş dizi ile dosyayı güncelleyelim
        await writeContacts([]);
        
        console.log(`${count} kişi başarıyla silindi.`);
        console.log('Kişi listesi şimdi boş.');
    } catch (error) {
        console.error("Kişiler silinirken bir hata oluştu:", error.message);
    }
};

removeAllContacts();
