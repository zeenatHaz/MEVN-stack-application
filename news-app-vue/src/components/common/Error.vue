
<template>
    <div class="text-center pt-3">
        <img
          height="40"
          class="pr-5 cursor-pointer"
          src="../../assets/images/error.png"
        />
    </div>
    <div class="font-size-14 p-3 font-red  "> {{data}}<br/>
    Please try later. </div>
    
</template>
<script>


export default{
    name:'Error',
    props:{
        data:{}
    }
}
</script>

<style scoped>

</style>
