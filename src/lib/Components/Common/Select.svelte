<script>
    export let value
    export let data
</script>

<div class="px-2 flex">
    <select class="bg-transparent" name="" id="" bind:value={value}>
        {#each data as item}
             <option value={item.value}>{item.caption}</option>
        {/each}
    </select>
    <slot/>
</div>


<style>

select {
        -webkit-appearance: none;
        -moz-appearance: none;
            appearance: none;
            color:#fff;
            border:none;
        }

    select::-ms-expand {
           display: none;
       }

</style>