var map;

// 异步加载百度地图api的回调函数
function init() {
    // 初始化地图
    map = new BMap.Map('map');
    var point = new BMap.Point(123.33740758492789, 41.78797989206016); //这是我家的坐标
    map.centerAndZoom(point, 17);
    map.enableScrollWheelZoom();

    // 绑定knockout
    ko.applyBindings(new ViewModel());
}

// 地点的model，数据来源：百度
var locations = [{
    "title": "八家子水果批发直销",
    "lng": 123.337868,
    "lat": 41.787087,
    "id": "35b7a37a05938b9d3a13fdc3"
}, {
    "title": "十四路农贸市场",
    "lng": 123.336161,
    "lat": 41.788264,
    "id": "e61fcac468cbe170c61b7570"
}, {
    "title": "肇工一校",
    "lng": 123.339702,
    "lat": 41.786422,
    "id": "b3aa435d79e6b90b14764394"
}, {
    "title": "青海里小区",
    "lng": 123.337715,
    "lat": 41.787336,
    "id": "8f2f9dd97910d3cbb11e36d3"
}, {
    "title": "白记小骨头羊杂馆(赞工街)",
    "lng": 123.3374,
    "lat": 41.787534,
    "id": "ab4f3fc9a844da4bdc1e524c"
}, {
    "title": "驰顺汽车维修养护",
    "lng": 123.337859,
    "lat": 41.787383,
    "id": "347de86c154b0bf0c929157f"
}, {
    "title": "金太阳幼儿园(勋业四路)",
    "lng": 123.336969,
    "lat": 41.786879,
    "id": "bac86d6343cf580679dbd25a"
}, {
    "title": "宏泽园",
    "lng": 123.336897,
    "lat": 41.786798,
    "id": "480b24d03e0aaaf19dec2be2"
}, {
    "title": "浴澜泉休闲会馆(重工南街店)",
    "lng": 123.333574,
    "lat": 41.787712,
    "id": "33fbfa833aea5cd80af5ebf0"
}, {
    "title": "兴隆大家庭(大天地店)",
    "lng": 123.3397,
    "lat": 41.784324,
    "id": "7fd72311f0dd2ce15cbe86cd"
}, {
    "title": "中国银行(刑警学院分理处)",
    "lng": 123.33281,
    "lat": 41.788472,
    "id": "e116be5414e3187bc81b959a"
}, {
    "title": "沈阳经纬客运有限公司西站",
    "lng": 123.332576,
    "lat": 41.785682,
    "id": "606289fd64a1084da30464e2"
}, {
    "title": "沈阳铁路信号工厂服装厂",
    "lng": 123.337616,
    "lat": 41.791813,
    "id": "079d4e19fff461056140a952"
}, {
    "title": "兴隆大天地室内公园",
    "lng": 123.33855,
    "lat": 41.78425,
    "id": "f60a15ed31c182f5ba17e7e9"
}, {
    "title": "劳动公园",
    "lng": 123.344489,
    "lat": 41.792225,
    "id": "5ffb18167536645f6e4760e2"
}, {
    "title": "沈阳中大骨科医院",
    "lng": 123.333628,
    "lat": 41.785682,
    "id": "37d60a464333ba1d1f1d11a3"
}];

// 地点构造函数
var Place = function(data) {
    this.title = ko.observable(data.title);
    this.lat = ko.observable(data.lat);
    this.lng = ko.observable(data.lng);
    this.id = ko.observable(data.id);
    this.marker = ko.observable();
    this.address = ko.observable('');
    this.picId = ko.observable('');
    this.tag = ko.observable('');
    this.rating = ko.observable('');
    this.comment = ko.observable('');
};

// ViewModel
var ViewModel = function() {

    // 绑定this
    var self = this;

    // 生成地点列表数组
    self.placeList = ko.observableArray();
    locations.forEach(function(location) {
        self.placeList.push(new Place(location));
    });

    // 生成地图上的小窗口
    var infoWindow = new BMap.InfoWindow("", {
        height: 200
    });

    // 生成地点标记
    var marker;

    // 给每个地点标记设定小窗口
    self.placeList().forEach(function(place) {

        // 初始化地图标记
        marker = new BMap.Marker(new BMap.Point(place.lng(), place.lat()));
        place.marker(marker);
        map.addOverlay(place.marker());

        // 使用百度Place API 获取地点详情
        var ajaxUrl = "https://api.map.baidu.com/place/v2/detail?uid=" + place.id() + "&output=json&scope=2&ak=cVicnzEfEuAtITIaDVahjg8i0toBYerK";
        $.ajax({
            url: ajaxUrl,
            type: "GET",
            dataType: "JSONP"
        }).done(function(data) {
            // 判断获取数据状态
            if (data.status === 0) {
                // 获取地址
                var address = '地址：' + data.result.address;
                place.address(address);
                // 获取图片id（如果有）
                var picId = data.result.hasOwnProperty('street_id') ? data.result.street_id : '';
                place.picId(picId);
                // 判断是否有详情数据
                if (data.result.hasOwnProperty('detail_info')) {
                    // 获取标签（如果有）
                    var tag = data.result.detail_info.hasOwnProperty('tag') ? '标签：' + data.result.detail_info.tag : '';
                    place.tag(tag);
                    // 获取评分（如果有）
                    var rating = data.result.detail_info.hasOwnProperty('overall_rating') ? '评分：' + data.result.detail_info.overall_rating : '';
                    place.rating(rating);
                    // 获取评价数组（如果有）
                    var reviews = data.result.detail_info.hasOwnProperty('di_review_keyword') ? data.result.detail_info.di_review_keyword : '';
                    // 创建一个空数组，用来将遍历的数组数据转换成字符串
                    var comment = [];
                    if (reviews != []) {
                        reviews.forEach(function(review) {
                            if (review.hasOwnProperty('keyword')) {
                                comment.push(review.keyword);
                            }
                        });
                        if (comment != []) {
                            place.comment('热评：' + comment.toString());
                        }
                    }

                }
                // 设定小窗口内容
                var content = '<h4>' + place.title() + '<h4>' +
                    '<img alt="街景图" src="https://api.map.baidu.com/panorama/v2?ak=cVicnzEfEuAtITIaDVahjg8i0toBYerK&width=110&height=55&poiid=' + place.picId() + '">' +
                    '<p>' + place.address() + '</p>' +
                    '<p>' + place.tag() + '</p>' +
                    '<p>' + place.rating() + '</p>' +
                    '<p>' + place.comment() + '</p>';

            } else {
                var content = '<h4>地点数据获取失败，没有这个地点的数据<h4>'; // 若数据获取失败，则设定小窗口内容为错误信息
            }

            // 使用百度EventWrapper开源库来给地图标记设定点击事件
            BMapLib.EventWrapper.addListener(place.marker(), "click", function(e) {
                e.target.openInfoWindow(infoWindow);
                // 设定动画效果
                e.target.setAnimation(BMAP_ANIMATION_BOUNCE);
                setTimeout(function() {
                    e.target.setAnimation(null);
                }, 500);

                infoWindow.setContent(content);
                // 当点击标记时，地图中心会移至标记处
                map.panTo(e.target.getPosition());
            })

        }).fail(function() {
            alert("地点数据获取失败，请刷新页面重试"); // ajax数据获取失败时的事件
        });
    });

    // 给列表项的点击事件绑定地图标记的点击事件
    self.showInfo = function(place) {
        var mkr = place.marker();
        BMapLib.EventWrapper.trigger(mkr, 'click', {
            'type': 'onclick',
            target: mkr
        });
    };

    // 创建过滤列表数组
    self.filteredList = ko.observableArray();

    // 初始化过滤列表数组，让页面加载后能显示所有地点
    self.placeList().forEach(function(place) {
        self.filteredList.push(place);
    });

    // 创建过滤关键字
    self.keyword = ko.observable('');

    // 过滤方法
    self.filter = function() {
        // 先将列表和地图标记清空
        self.filteredList([]);
        map.clearOverlays();

        // 获取过滤关键字和地点列表
        var filterKeyword = self.keyword();
        var list = self.placeList();

        // 遍历地点列表，若含有关键字，则使其在列表栏和地图上显示出来
        list.forEach(function(place) {
            if (place.title().indexOf(filterKeyword) != -1) {
                self.filteredList.push(place);
                map.addOverlay(place.marker());
            }
        });
    };

};

// 百度地图api加载失败时的回调函数
var baiduError = function() {
    window.alert("百度地图加载失败，请稍后重试");
};
