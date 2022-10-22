const moduleRouter = {
    path: '/test',
    component: () => import(/* webpackChunkName: "Product" */'@/views/Pages/Test/test.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Product Index" */ '@/views/Pages/Test/index.vue'),
            path: '',
            name: 'product.index',
            meta: {
                title: "ຫົວຂໍ້ຫຼັກ",
                name: "ຫົວຂໍ້ຍ່ອຍ",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

