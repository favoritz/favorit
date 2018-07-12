

Get /carousselitems{
    [{
    imgsrc:String
    linkepage:String
    }]
}

Get /announcements{
    [{
    name:String
    linkpage:String
    }]
}

Get /recent/{count}{
    [{
        "id": 1
        "location": "市区附近",
        "price": "100",
        "priority": "置顶",
        "title": "二手iphone无锁",
        "create_at": "一个月前",
        'imgsrc':'/img/detailPreview.jpg'
    }]
}

Get /postdetail/{id}{
    title: 'title',
        'carousselitems': [{
            'imgsrc': String,
        }],
    create_at: 'create time',
    location: 'location',
    content: 'content。',
    userIcon: 'usericon',
    userID: 0,
    username: 'username',
    'type': '#出二手#',
    userPostCount: 'upostcount',
    userDoneCount: 'udonecount',
    readCount:'readcount',
    price:'price',
    top:true,
    good:true,
    'replies': [{
        'index':0,
        'id':0,
        'avatar': String,
        'username':String,
        'create_at':String,
        'content':String
    }],
}

Post /filter(selectedLocations:[int],selectedsorting:int,selectedtype:int){
    list:[{
        id:Int,
        imgsrc:String,
        title:String,
        create_at:String,
        location:String,
        price:String
    }]
}
