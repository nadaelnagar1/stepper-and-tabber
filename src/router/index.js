import { createRouter, createWebHashHistory } from "vue-router";
import Menu from "../views/Menu.vue";
import PersonalDemo from "../views/menu/PersonalDemo.vue";
import SeatDemo from "../views/menu/SeatDemo.vue";
import PaymentDemo from "../views/menu/PaymentDemo.vue";
import ConfirmationDemo from "../views/menu/ConfirmationDemo.vue";
import Stepper from "../views/Stepper.vue"
import Stepper1Demo from "../views/stepper/Stepper1Demo.vue"
import Stepper2Demo from "../views/stepper/Stepper2Demo.vue"
import Stepper3Demo from "../views/stepper/Stepper3Demo.vue"
import Stepper4Demo from "../views/stepper/Stepper4Demo.vue"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {

        path:"/stepper",
        component :Stepper,
        children: [
            {
              path: "Stepper1Demo",
              component: Stepper1Demo,
            },
            {
              path: "Stepper2Demo",
              component: Stepper2Demo,
            },
            {
              path: "Stepper3Demo",
              component: Stepper3Demo,
            },
            {
              path: "Stepper4Demo",
              component: Stepper4Demo,
            },
          ],

    },
    {
     
          path: "/",
          component: Menu,
          children: [
            {
              path: "menu/personal",
              component: PersonalDemo,
            },
            {
              path: "menu/seat",
              component: SeatDemo,
            },
            {
              path: "menu/payment",
              component: PaymentDemo,
            },
            {
              path: "menu/confirmation",
              component: ConfirmationDemo,
            },
          ],
      
    },
  ],
});

export default router;
