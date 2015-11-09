/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'wwwroot/app/app.js': [
                        'Scripts/app.js',
                        'Scripts/**/*.js'
                    ]
                }
            }
        },

        concat: {
            options: {
                separator: ';\n',
                stripBanners: true
            },
            dist: {
                src: [
                        'node_modules/jquery/dist/jquery.min.js',
                        'node_modules/angular/angular.min.js',
                        'node_modules/angular-route/angular-route.min.js',
                        'node_modules/bootstrap/dist/js/bootstrap.min.js'
                ],
                dest: 'wwwroot/app/dependencies.js',
            },
        },

        copy: {
            main: {
                files: [
                    { expand: true, flatten: true, cwd: 'node_modules/font-awesome/fonts', src: ['**'], dest: 'wwwroot/fonts/' },
                ]
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1,
                keepSpecialComments: 0
            },
            target: {
                files: {
                    'wwwroot/css/content.css': [
                        'css/**/*.css'
                    ],
                    'wwwroot/css/dependencies.css': [
                        'node_modules/bootstrap/dist/css/bootstrap.css',
                        'node_modules/font-awesome/css/font-awesome.css'
                    ]
                }
            }
        },

        watch: {
            scripts: {
                files: ['Scripts/**/*.js', 'css/**/*.css'],
                tasks: ['cssmin', 'uglify', 'concat']
            }
        }
    });

    grunt.registerTask('default', ['cssmin', 'uglify', 'concat', 'copy', 'watch']);
};