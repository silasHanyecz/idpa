import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
import {fas} from "@fortawesome/free-solid-svg-icons"
import {far} from "@fortawesome/free-regular-svg-icons"
import './assets/main.scss';
import './assets/home';
import './assets/footer.scss';
import './assets/cards.scss';
import './assets/video.scss';

library.add(fas, far)
const app = createApp(App)

/* add font awesome icon component */
app.use(router)

app.mount('#app')
