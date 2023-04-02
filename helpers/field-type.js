import formInput from "~/components/ui/form-input.vue";
import formCheckbox from "~/components/ui/form-checkbox.vue";
import formFile from "~/components/ui/form-file.vue";
import formSelect from "~/components/ui/form-select.vue";
import formTextarea from "~/components/ui/form-textarea.vue";
import cardWrapper from "~/components/ui/cards/card-wrapper.vue";
import formCheckboxGroup from "~/components/ui/form-checkbox-group.vue";
import formInfo from "~/components/ui/form-info.vue";

export function getFieldName(type) {
    switch (type) {
        case 'input':
            return formInput;
        case 'checkbox':
            return formCheckbox;
        case 'file':
            return formFile;
        case 'card':
            return cardWrapper;
        case 'select':
            return formSelect;
        case 'textarea':
            return formTextarea;
        case 'checkBoxGroup':
            return formCheckboxGroup;
        case 'formInfo':
            return formInfo;
        default:
            return formInput;
    }
}