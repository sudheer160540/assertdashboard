export const menus = [
    {
        'name': 'Dashboard',
        'icon': 'dashboard',
        'link': '/auth/dashboard',
        'open':false
        
    },
    // {
    //     'name': 'Assets',
    //     'icon': 'widgets',
    //     'link': false,
    //     'open': false,
    //     'sub': [
    //         {
    //             'name': 'All Deployed',
    //             'link': 'material-widgets/buttons',
    //             'icon': 'indeterminate_check_box',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'All Redy to Deploy',
    //             'link': 'material-widgets/list',
    //             'icon': 'list',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {

    //             'name': 'All Pending',
    //             'link': 'material-widgets/stepper',
    //             'icon': 'view_week',
    //             'chip': false,
    //             'open': false,

    //         },
    //         {
    //             'name': 'Expansion',
    //             'link': 'material-widgets/expansion',
    //             'icon': 'web_aaset',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'Progress Spinner',
    //             'link': 'material-widgets/spinner',
    //             'icon': 'cached',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'Cards',
    //             'link': 'material-widgets/cards',
    //             'icon': 'crop_16_9',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'Icons',
    //             'link': 'material-widgets/icons',
    //             'icon': 'gif',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {

    //             'name': 'AutoComplete',
    //             'link': 'material-widgets/autocomplete',
    //             'icon': 'get_app',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'CheckBox',
    //             'link': 'material-widgets/checkbox',
    //             'icon': 'check_box',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'DatePicker',
    //             'link': 'material-widgets/datepicker',
    //             'icon': 'date_range',
    //             'chip': false,
    //             'open': false,
    //         },

    //         {
    //             'name': 'Slider',
    //             'link': 'material-widgets/slider',
    //             'icon': 'keyboard_tab',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'Slide Toggle',
    //             'link': 'material-widgets/slide-toggle',
    //             'icon': 'album',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'Menu',
    //             'icon': 'menu',
    //             'link': 'material-widgets/menu',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'Progress Bar',
    //             'link': 'material-widgets/progress-bar',
    //             'icon': 'trending_flat',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'Input',
    //             'icon': 'input',
    //             'link': 'material-widgets/input',
    //             'open': false,
    //         },
    //         {
    //             'name': 'Radio',
    //             'icon': 'radio_button_checked',
    //             'link': 'material-widgets/radio',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'Select',
    //             'icon': 'select_all',
    //             'link': 'material-widgets/select',
    //             'open': false,
    //         },
    //     ]
    // },
    // {
    //     'name'   : 'Forms',
    //     'icon'   : 'mode_edit',
    //     'open'   : false,
    //     'link'   : false,
    //     'sub'    :  [
    //                     {
    //                         'name': 'Template Driven',
    //                         'icon': 'mode_edit',
    //                         'open'   : false,
    //                         'link':'forms/template_forms'
    //                     },
    //                     {
    //                         'name': 'Reactive Forms',
    //                         'icon': 'text_fields',
    //                         'open'   : false,
    //                         'link':'forms/reactive_forms'
    //                     }
    //                 ]
    // },
    {
        'name': 'Assets',
        'icon': 'list',
        'link': false,
        'open': false,
        'chip': { 'value': 2, 'color': 'accent' },
        'sub': [
            {
                'name': 'Deployed',
                'icon': 'filter_list',
                'link': 'tables/fixed',
                'open': false,
            },
            {
                'name': 'Redy to Deploy',
                'icon': 'done_all',
                'link': 'tables/featured',
                'open': false,
            },
            {
                'name': 'Pending',
                'icon': 'filter_center_focus',
                'link': 'tables/responsive',
                'open': false,
            }
        ]

    },
    {
        'name': 'Licenses',
        'icon': 'mode_edit',
        'link': '/auth/tables/licensesdata',
        'open': false,
    }, {
        'name': 'Accessories',
        'open': false,
        'link': '/auth/tables/accessoriesdata',
        'icon': 'grade',
    },
    {
        'name': 'Consumables',
        'open': false,
        'link': '/auth/tables/consumablesdata',
        'icon': 'show_chart',
    },{
        'name': 'Component',
        'open': false,
        'link': '/auth/tables/componentdata',
        'icon': 'work',
    },{
        'name': 'People',
        'open': false,
        'link': '/auth/tables/filter',
        'icon': 'local_laundry_service',
    }
    //  {
    //     'name': 'Applications',
    //     'icon': 'view_module',
    //     'open': false,
    //     'link': false,
    //     'sub': [
    //         {
    //             'name': 'chat',
    //             'icon': 'chat',
    //             'link': 'chats/chat',
    //             'open': false,
    //         },
    //         {
    //             'name': 'mail',
    //             'icon': 'mail',
    //             'link': 'mail/mail',
    //             'open': false,
    //         },
    //         {
    //             'name': 'Editor',
    //             'icon': 'editor',
    //             'link': 'editor/editor',
    //             'open': false,
    //         }
    //     ]
    // }
    // , {
    //     'name': 'Pages',
    //     'icon': 'content_copy',
    //     'open': false,
    //     'link': false,
    //     'sub': [
    //         {
    //             'name': 'Login',
    //             'icon': 'work',
    //             'open': false,
    //             'link': '../login',
    //         }, {
    //             'name': 'Services',
    //             'icon': 'local_laundry_service',
    //             'open': false,
    //             'link': 'pages/services',
    //         }, {
    //             'name': 'Contact',
    //             'icon': 'directions',
    //             'open': false,
    //             'link': 'pages/contact'
    //         }
    //     ]
    // }
    , {

        'name': 'Reports',
        'icon': 'pie_chart_outlined',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'License Report',
                'icon': 'view_list',
                'link': '/auth/tables/licensereport',
                'open': false,

            },
            {
                'name': 'Accessory Report',
                'icon': 'show_chart',
                'open': false,
                'link': '/auth/tables/accessoryreport',
            },
            {
                'name': 'Depreciation Report',
                'icon': 'pie_chart',
                'open': false,
                'link': '/auth/tables/depreciationreport',
            }
        ]
    },
    //  {
    //     'name': 'maps',
    //     'icon': 'map',
    //     'open': false,
    //     'link': false,
    //     'sub': [
    //         {
    //             'name': 'google-map',
    //             'icon': 'directions',
    //             'link': 'maps/googlemap',
    //             'open': false,
    //         },
    //         {
    //             'name': 'leaflet-map',
    //             'icon': 'directions',
    //             'link': 'maps/leafletmap',
    //             'open': false,
    //         }
    //     ]
    // }
];
