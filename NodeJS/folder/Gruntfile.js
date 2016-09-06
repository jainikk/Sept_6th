module.exports=function(grunt){


grunt.initConfig({
cssmin:{
	target:{
		files:{
   'src/css/output.css' :['src/css/module1.css', 'src/css/module2.css']
				}
			}
		},
});

grunt.loadNpmTasks('grunt-contrib-cssmin');
//grunt.registerTask('default',['cssmin']);

/*grunt.registerTask('default','this is default task',function(){

grunt.task.run(['cssmin']);
}); */


grunt.registerTask('cssTask','this is cssmin task',function(){

grunt.task.run(['cssmin']);
});
};