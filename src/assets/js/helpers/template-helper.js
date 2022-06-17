export class TemplateHelper {
    read(templateId) {
        try {
            const templateRef = document.getElementById(templateId);
            return document.importNode(templateRef.content, true);
        } catch(error) {
            throw new Error(`template with id #${templateId} was not found`);
        }
        
    }
}