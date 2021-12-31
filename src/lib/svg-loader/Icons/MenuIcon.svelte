
<script>
    export let size = "100%";
    export let height;
    export let width;
    export let color = "#000000";
    
    if (size !== "100%") {
        size =
        size.slice(-1) === "x"
            ? size.slice(0, size.length - 1) + "em"
            : parseInt(size) + "px";
    }
</script>
 
<svg width={width || size} height={height || size} viewBox="0 0 16 12" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M1.14258 1.42856H14.8569" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.14058 6H14.8514" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.14286 10.5714H14.8514" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    