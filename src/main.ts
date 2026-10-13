
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'


const app = createApp(App)

app.use(createPinia())

app.directive('reveal', {
  mounted(el) {
    el.classList.add('reveal-init');
    
    

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Kapag nakita sa screen (scroll down man o scroll up), mag-fade in
          el.classList.add('reveal-visible');
        } else {
          // Kapag lumabas sa screen, itatago ulit para mag-animation tuwing babalikan
          el.classList.remove('reveal-visible');
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
      }
    );
    
    observer.observe(el);
  },
});


app.mount('#app')
