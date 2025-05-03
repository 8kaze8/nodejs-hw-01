import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
    try {
        // Mevcut kişileri oku
        const contacts = await readContacts();
        
        // Yeni kişiler oluştur
        const newContacts = Array.from({ length: number }, createFakeContact);
        
        // Mevcut ve yeni kişileri birleştir
        const updatedContacts = [...contacts, ...newContacts];
        
        // Dosyaya kaydet
        await writeContacts(updatedContacts);
        
        console.log(`${number} yeni kişi eklendi. Toplam kişi sayısı: ${updatedContacts.length}`);
    } catch (error) {
        console.error("Kişi oluşturma sırasında bir hata oluştu:", error.message);
    }
};

generateContacts(5);
