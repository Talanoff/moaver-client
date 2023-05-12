import formInput from "~/components/ui/form-input.vue";
import formDatepicker from "~/components/ui/form-datepicker.vue";
import formCheckbox from "~/components/ui/form-checkbox.vue";
import formFile from "~/components/ui/form-file.vue";
import formSelect from "~/components/ui/form-select.vue";
import formTextarea from "~/components/ui/form-textarea.vue";
import categories from "~/components/ui/categories.vue";
import services from "~/components/forms/services.vue";
import formInfo from "~/components/ui/form-info.vue";
import locations from "~/components/forms/locations.vue";
import formCheckboxGroup from "~/components/ui/form-checkbox-group.vue";
import serviceQuantity from "~/components/forms/serviceQuantity.vue";

export function getFieldName(type) {
    switch (type) {
        case 'dateTime':
            return formDatepicker;
        case 'checkbox':
            return formCheckbox;
        case 'file':
            return formFile;
        case 'categories':
            return categories;
        case 'select':
            return formSelect;
        case 'textarea':
            return formTextarea;
        case 'services':
            return services;
        case 'vehicles':
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
