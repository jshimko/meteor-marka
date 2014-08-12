Package.describe({
    name: 'marka',
    summary: 'Beautiful icon transformations from http://fian.my.id/marka packaged for Meteor.js.'
});

Package.on_use(function(api) {

    api.add_files([
        'lib/dist/css/marka.css',
        'lib/dist/js/marka.js'
    ], 'client');

});
