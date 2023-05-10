import formInput from "~/components/ui/form-input.vue";
import formCheckbox from "~/components/ui/form-checkbox.vue";
import formFile from "~/components/ui/form-file.vue";
import formSelect from "~/components/ui/form-select.vue";
import formTextarea from "~/components/ui/form-textarea.vue";
import cardWrapper from "~/components/ui/cards/card-wrapper.vue";
import services from "~/components/forms/services.vue";
import formInfo from "~/components/ui/form-info.vue";
import locations from "~/components/forms/locations.vue";
import formCheckboxGroup from "~/components/ui/form-checkbox-group.vue";
import serviceQuantity from "~/components/forms/serviceQuantity.vue";

export function getFieldName(type) {
    switch (type) {
        case 'input':
        case 'password':
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
        case 'services':
            return services;
        case 'serviceQuantity':
            return serviceQuantity;
        case 'locations':
            return locations;
        case 'checkBoxGroup':
            return formCheckboxGroup
        case 'formInfo':
            return formInfo;
        default:
            return formInput;
    }
}
