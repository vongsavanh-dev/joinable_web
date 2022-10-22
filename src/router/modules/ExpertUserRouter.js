const moduleRouter = {
    path: '/expert',
    component: () => import(/* webpackChunkName: "ExpertUser" */'@/views/Pages/ExpertUser/ExpertUser.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "ExpertUser Index" */ '@/views/Pages/ExpertUser/index.vue'),
            path: '',
            name: 'expert.index',
            meta: {
                title: "ຂໍ້ມູນຜູ້ຊ່ຽວຊານ",
                name: "ຫົວຂໍ້ຍ່ອຍ",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

