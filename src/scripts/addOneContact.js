import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
    try {
        // Mevcut kişileri oku
        const contacts = await readContacts();
        
        // Yeni bir kişi oluştur
        const newContact = createFakeContact();
        
        // Yeni kişiyi listeye ekle
        const updatedContacts = [...contacts, newContact];
        
        // Dosyaya kaydet
        await writeContacts(updatedContacts);
        
        console.log(`Yeni kişi eklendi: ${newContact.name}`);
        console.log(`Toplam kişi sayısı: ${updatedContacts.length}`);
    } catch (error) {
        console.error("Kişi ekleme sırasında bir hata oluştu:", error.message);
    }
};

addOneContact();
