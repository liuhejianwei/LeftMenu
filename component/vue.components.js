Vue.component('leftmenu', {
    template: "  <ul class=\"level1\">                <li class=\"li1 level1_li\">                    <div class=\"a_wrap\">                        <a class=\"level1_a\" href=\"\">我的首页</a>                    </div>                </li><li class=\"li3\" level1_li=\"\" v-for=\"item in list\"><div class=\"a_wrap\"><a class=\"level1_a\" href=\"javascript:void(0);\" v-on:click=\"toggle(item)\">{{item.menuName}}</a></div><ul :style=\"item.show\"><li v-for=\"item2 in item.menuSubLink\"><a href=\"javascript:;;\" target=\"_blank\">{{item2.menuName}} </a></li></ul></li>  </ul>",
    data() {
        return {

        }
    },
    methods: {
        toggle: function (item) {
            if (item.show == 'display:none') {
                item.show = 'display:block';
            }
            else if (item.show == 'display:block') {
                item.show = 'display:none';
            }
        }
    },
    props:['list'],
    mounted: function () {
      
    }
});



