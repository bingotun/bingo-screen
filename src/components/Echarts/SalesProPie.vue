<template>
    <!-- <div>储能SOC</div> -->
    <VueEcharts :options="state.myOptions" />
</template>
<script setup>
import VueEcharts from 'components/Echarts/VueEcharts.vue'
const props = defineProps({
  options: {
    type: Number,
    default: 0
  },
})
const state = reactive({
  myOptions: {}
})
watch(()=>props.options, () => {
  // console.log(4442222, props);
  state.myOptions = {
    tooltip: {
      show: true
    },
    series: [
      {
        name: '储能SOC',
        type: 'liquidFill',
        amplitude: '3%', // 波浪幅度
        radius: '90%',
        waveAnimation: true,
        animation: true,
        data: [props.options / 100],
        // center: ['25%', '75%'],
        outline: {
          show: false,
          borderDistance: 0,
          itemStyle: {
            borderWidth: 5,
            borderColor: '#156ACF',
            shadowBlur: 20,
            shadowColor: 'rgba(255, 0, 0, 1)'
          }
        },
        itemStyle: {
          shadowBlur: 0,
          color: '#8597d1'
        },
        backgroundStyle: {
          borderColor: 'rgb(164, 219, 119)',
          borderWidth: 1,
          shadowColor: 'rgba(0, 0, 0, 0.4)',
          // shadowBlur: 20
        },
        label: {
          formatter: function (param) {
            return param.seriesName + '\n' + '\n'
              + props.options + '%';
              // + (param.value) * 100 + '%';
          },
          fontSize: 14,
          color: '#D94854'
        },
        shape: 'roundRect'
        // shape: 'path://M367.855,428.202c-3.674-1.385-7.452-1.966-11.146-1.794c0.659-2.922,0.844-5.85,0.58-8.719 c-0.937-10.407-7.663-19.864-18.063-23.834c-10.697-4.043-22.298-1.168-29.902,6.403c3.015,0.026,6.074,0.594,9.035,1.728 c13.626,5.151,20.465,20.379,15.32,34.004c-1.905,5.02-5.177,9.115-9.22,12.05c-6.951,4.992-16.19,6.536-24.777,3.271 c-13.625-5.137-20.471-20.371-15.32-34.004c0.673-1.768,1.523-3.423,2.526-4.992h-0.014c0,0,0,0,0,0.014 c4.386-6.853,8.145-14.279,11.146-22.187c23.294-61.505-7.689-130.278-69.215-153.579c-61.532-23.293-130.279,7.69-153.579,69.202 c-6.371,16.785-8.679,34.097-7.426,50.901c0.026,0.554,0.079,1.121,0.132,1.688c4.973,57.107,41.767,109.148,98.945,130.793 c58.162,22.008,121.303,6.529,162.839-34.465c7.103-6.893,17.826-9.444,27.679-5.719c11.858,4.491,18.565,16.6,16.719,28.643 c4.438-3.126,8.033-7.564,10.117-13.045C389.751,449.992,382.411,433.709,367.855,428.202z',
      }
    ]
  };
})
</script>
