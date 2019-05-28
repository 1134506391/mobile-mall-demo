import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        // 前台
        {
            path: '/',
            name: 'client',
            component: () =>
                import ('./views/client/client.vue'),
            redirect: '/index',
            children: [{
                path: 'index',
                name: 'index',
                component: () =>
                    import ('./views/client/index.vue')
            }, {
                path: 'car',
                name: 'car',
                component: () =>
                    import ('./views/client/car.vue')
            }, {
                path: 'my',
                name: 'my',
                component: () =>
                    import ('./views/client/my.vue')
            }, {
                path: 'detail',
                name: 'detail',
                component: () =>
                    import ('./views/client/detail.vue')
            }, {
                path: 'order',
                name: 'order',
                component: () =>
                    import ('./views/client/order.vue')
            }]
        },
        // 后台
        {
            path: '/admin',
            name: 'admin',
            component: () =>
                import ( /* webpackChunkName: "admin" */ './views/admin/admin.vue'),
            redirect: '/admin/index',
            meta: {
                title: '首页'
            },
            children: [{
                    path: 'index',
                    name: 'index',
                    component: () =>
                        import ('./views/admin/index.vue'),
                    meta: {
                        title: '首页'
                    }
                }, {
                    path: 'phone',
                    name: 'phone',
                    component: () =>
                        import ('./views/admin/phone/index.vue'),
                    meta: {
                        title: '首页/手机'
                    },
                    redirect: '/admin/phone/list',
                    children: [{
                        path: 'list',
                        name: 'list',
                        component: () =>
                            import ('./views/admin/phone/list.vue'),
                        meta: {
                            title: '手机列表'
                        }
                    }, {
                        path: 'create',
                        name: 'create',
                        component: () =>
                            import ('./views/admin/phone/create.vue'),
                        meta: {
                            title: '新增手机'
                        }
                    }, {
                        path: 'update',
                        name: 'update',
                        component: () =>
                            import ('./views/admin/phone/update.vue'),
                        meta: {
                            title: '编辑手机'
                        }
                    }]
                },
                // 手机品牌
                {
                    path: 'phoneBrand',
                    name: 'phoneBrand',
                    component: () =>
                        import ('./views/admin/phoneBrand/index.vue'),
                    meta: {
                        title: '手机品牌'
                    },
                    redirect: '/admin/phoneBrands/list',
                    children: [{
                        path: 'list',
                        name: 'list',
                        component: () =>
                            import ('./views/admin/phoneBrand/list.vue'),
                        meta: {
                            title: '新增手机品牌'
                        }
                    }, {
                        path: 'create',
                        name: 'create',
                        component: () =>
                            import ('./views/admin/phoneBrand/create.vue'),
                        meta: {
                            title: '新增手机品牌'
                        }
                    }]
                },
                // 角色
                {
                    path: 'role',
                    name: 'role',
                    component: () =>
                        import ('./views/admin/role/index.vue'),
                    meta: {
                        title: '角色'
                    },
                    redirect: '/admin/role/list',
                    children: [{
                            path: 'list',
                            name: 'list',
                            component: () =>
                                import ('./views/admin/role/list.vue'),
                            meta: {
                                title: '角色列表'
                            }
                        }, {
                            path: 'create',
                            name: 'create',
                            component: () =>
                                import ('./views/admin/role/create.vue'),
                            meta: {
                                title: '新增角色'
                            }
                        },
                        {
                            path: 'update',
                            name: 'update',
                            component: () =>
                                import ('./views/admin/role/update.vue'),
                            meta: {
                                title: '编辑角色'
                            }
                        }
                    ]
                },
                // 后台管理员
                {
                    path: 'adminUser',
                    name: 'adminUser',
                    component: () =>
                        import ('./views/admin/adminUser/index.vue'),
                    meta: {
                        title: '后台管理员'
                    },
                    redirect: '/admin/adminUser/list',
                    children: [{
                            path: 'list',
                            name: 'list',
                            component: () =>
                                import ('./views/admin/adminUser/list.vue'),
                            meta: {
                                title: '台管理员列表'
                            }
                        }, {
                            path: 'create',
                            name: 'create',
                            component: () =>
                                import ('./views/admin/adminUser/create.vue'),
                            meta: {
                                title: '新增台管理员'
                            }
                        },
                        {
                            path: 'update',
                            name: 'update',
                            component: () =>
                                import ('./views/admin/adminUser/update.vue'),
                            meta: {
                                title: '编辑台管理员'
                            }
                        }
                    ]
                },
                // 前台管理员
                {
                    path: 'clientUser',
                    name: 'clientUser',
                    component: () =>
                        import ('./views/admin/clientUser/index.vue'),
                    meta: {
                        title: '后台管理员'
                    },
                    redirect: '/admin/clientUser/list',
                    children: [{
                            path: 'list',
                            name: 'list',
                            component: () =>
                                import ('./views/admin/clientUser/list.vue'),
                            meta: {
                                title: '台管理员列表'
                            }
                        }, {
                            path: 'create',
                            name: 'create',
                            component: () =>
                                import ('./views/admin/clientUser/create.vue'),
                            meta: {
                                title: '新增台管理员'
                            }
                        },
                        {
                            path: 'update',
                            name: 'update',
                            component: () =>
                                import ('./views/admin/clientUser/update.vue'),
                            meta: {
                                title: '编辑台管理员'
                            }
                        }
                    ]
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ('./views/client/login.vue'),
            meta: {
                title: '后台登录'
            }
        },
        {
            path: '/register',
            name: 'register',
            component: () =>
                import ('./views/admin/login/register.vue'),
            meta: {
                title: '后台注册'
            }
        },
        {
            path: '/admin/login',
            name: 'adminLogin',
            component: () =>
                import ('./views/admin/login/login.vue'),
            meta: {
                title: '后台登录'
            }
        }
    ]
})