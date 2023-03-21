<script setup>
import { ref } from 'vue';

const nestedRouteItems = ref([
    {
        label: 'Personal',
        to: '/menu/personal',
        status:'true'
    },
    {
        label: 'Seat',
        to: '/menu/seat',
        status:'true'
    },
    {
        label: 'Payment',
        to: '/menu/payment',
        status:'true'
    },
    {
        label: 'Confirmation',
        to: '/menu/confirmation',
        status:'false'
    }
]);

</script>

<template>
    <div class="grid p-fluid m-3">
 

        <div class="col-12 md:col-6">
            <div class="card card-w-title">
                <h5>TabMenu</h5>
                <TabMenu :model="nestedRouteItems"    />
                <router-view />
            </div>
        </div>
 
    </div>
</template>