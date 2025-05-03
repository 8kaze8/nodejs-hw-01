import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
    try {
        // Mevcut kişileri oku
        const contacts = await readContacts();
        
        // Dizide eleman var mı kontrol et
        if (contacts.length === 0) {
            console.log('Kişi listesi zaten boş!');
            return;
        }
        
        // Son kişinin bilgilerini al
        const removedContact = contacts[contacts.length - 1];
        
        // Son kişiyi çıkar
        const updatedContacts = contacts.slice(0, -1);
        
        // Güncellenmiş listeyi kaydet
        await writeContacts(updatedContacts);
        
        console.log(`Son kişi silindi: ${removedContact.name}`);
        console.log(`Kalan kişi sayısı: ${updatedContacts.length}`);
    } catch (error) {
        console.error("Son kişi silinirken bir hata oluştu:", error.message);
    }
};

removeLastContact();
