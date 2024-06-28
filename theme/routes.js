module.exports = {
  name: 'Theming Routes File',
  themeRoutes: {
    page_route: {
      initial: '/',
      dashboard: {
        initial: '/dashboard',
        user: {
          account: '/dashboard/gestion-comptes/account',
          entreprise: '/dashboard/gestion-comptes/entreprise',
        },
        applications: {
          all: '/dashboard/applications',
          show: '/dashboard/applications/show/:app_name',
        },
        company: '/dashboard/gestion-comptes/entreprise',
      },
      dev: {
        initial: '/dev',
        community: '/dev/community',
        docs: '/dev/docs/%slug',
        tutos: '/dev/docs/%slug#tutoriels',
        guides: '/dev/guides/%slug',
      },
      commercial: {
        offers: '/offers',
        detail: '/offers/:slug',
      },
      docs: {
        api: '/dev',
        documentation: '/dev/docs',
      },
      user: {
        auth: '/user/auth',
        register: '/user/auth/register',
        forgot_password: '/user/auth/forgot_password',
        reset_password: '/user/auth/reset_password', //NOSONAR
        edit_profil: '/dashboard/gestion-comptes/account',
      },
      help: '/help',
      app: {
        all: '/dashboard/applications',
        details: '/dashboard/applications/show/%slug',
        update: '/dashboard/applications/update/{app_name}',
      },
    },
    api_route: {
      backend: {
        create: {
          developer: '/console/v1/user/v1/create',
          apps: '/console/v1/apps/v1/:identifier/create',
          production: '/console/v1/apps/v1/:identifier/prod/create',
        },
        get: {
          homePage: '/content/v1/home-page',
          pages: {
            home: '/content/v1/home-page',
            help: '/content/v1/help-page',
            developer: '/content/v1/developper-page',
            offer: '/content/v1/offer-page',
            category: '/content/v1/category/%slug',
            categories: '/content/v1/categories',
            detailsApp: '/console/v1/apps/v1',
            products: '/console/v1/apps/v1/all-products',
            dashboard: {
              applications: '/console/v1/apps/v1/%identity',
              dev: '/console/v1/user/v1/developer/%identifier',
            },
          },
          menu: {
            top: '/content/v1/menu/top-menu',
            main: '/content/v1/menu/main-menu',
            dashboard: '/content/v1/menu/dashboard-menu',
          },
          offer: '/content/v1/offer/%slug',
          offers: '/content/v1/offers',
          user: {
            me: '/console/v1/user/v1/me',
            status: '/console/v1/user/v1/:identifier/status',
          },
          devUrl: '/console/v1/user/v1/developer/%identity',
          sectors: '/content/v1/sector-activities',
        },
        post: {
          refresh: '/console/v1/user/v1/refresh-token',
          verifyOtp: '/console/v1/user/v1/verify-otp',
          communication: {
            sendMail: '/apimanagement/v1/communication/v1/emails',
          },
          elk: {
            byDev: '/console/v1/elk/v1/transactions/%dev',
            byDevApp: '/console/v1/elk/v1/transactions/%dev/%app',
            v2: {
              om: {
                all: '/console/v1/elk/v2/transactions/%dev?size=5',
                app: '/console/v1/elk/v2/transactions/%dev/%app',
              },
            },
          },
          apigee: {
            remove: {
              status: `/console/v1/apps/v1/revoke/:identifier/:app_name/:status`,
            },
          },
          verifyCaptcha: '/captcha/v1/verify-captcha',
        },
        update: {
          reset_Password: '/console/v1/user/v1/resset-password',
          active_user: '/console/v1/user/v1/active/%identifier',
          app: '/console/v1/apps/v1/:identifier/update',
          userProfile: '/console/v1/user/v1/update/%identifier',
          userPassword: '/console/v1/user/v1/update/:identifier/password',
        },
        delete: {
          apps: '/console/v1/apps/v1/delete/:identifier/:app_name/:app_client_id',
        },
      },
      centralized: {
        content: {
          menu: {
            footer: '/contentManagement/v1/menu',
          },
        },
      },
    },
  },
};
