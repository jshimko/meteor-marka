Package.describe({
    name: 'marka',
    summary: 'Beautiful icon transformations'
});

Package.on_use(function(api) {

    api.add_files([
        'lib/dist/css/marka.css',
        'lib/dist/js/marka.js'
    ], 'client');

});
