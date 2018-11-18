<template>
    <div>
        <div>
            <ul>
                <li>首页</li>
                <li>精品推荐</li>
                <li>今日资源</li>
                <li>最佳优异</li>
                <li>图书管理</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    width: 70%;
    position: relative;
    left:5%;
    top:-10px;
}
ul li {
    display: inline-block;
    cursor: pointer;
    padding: 10px;
    background: #997;
    border-radius: 5px;
    margin-left:50px;
    position: relative;
}
ul li:hover {
    display: inline-block;
    cursor: pointer;
    padding: 10px;
    background: black;
    color:white;
}

</style>
