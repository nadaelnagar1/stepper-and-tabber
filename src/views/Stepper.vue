<template>
    <div class="col-12 md:col-6">
            <div class="card card-w-title">
                <h5>Stepper</h5>
                <Steps :model="nestedRouteItems" :readonly="false"   />
                <router-view />
            </div>
        </div>
</template>
<script setup>
import { ref } from 'vue';

const nestedRouteItems = ref([
    {
        label: 'Step1',
        to: '/stepper/Stepper1Demo'
    },
    {
        label: 'Step2',
        to: '/stepper/Stepper2Demo'
    },
    {
        label: 'Step3',
        to: '/stepper/Stepper3Demo'
    },
    {
        label: 'Step4',
        to: '/stepper/Stepper4Demo'
    }
]);

</script>

