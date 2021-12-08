import 'ytdemo-ui/lib/index/index.css'
export default async ({ Vue, 
    options,
    router,
    siteData, 
    isServer }) => {
    if (!isServer) {
        await import('ytdemo-ui').then(module => {
            Vue.use(module.default);
        });
    }  
}

