import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from 'primevue/config';
import "primevue/resources/primevue.min.css"
import "primevue/resources/themes/lara-light-blue/theme.css";     
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Card from 'primevue/card';
import Menubar from 'primevue/menubar';
import Divider from 'primevue/divider';
import 'primeicons/primeicons.css';
import InputText from 'primevue/inputtext';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
// import Paginator from 'primevue/paginator';

createApp(App).use(router).use(PrimeVue).component('Button',Button).component('Card',Card).component('InputText',InputText).component('Menubar',Menubar).component('Divider',Divider).component('DataTable',DataTable).component('Column',Column).mount("#app");
