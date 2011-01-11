// [config]
// expect_result: fail
// glsl_version: 1.20
// extension: GL_ARB_explicit_attrib_location
// [end config]
//
// "in" is not allowed on function local variables in GLSL 1.20 even when
// GL_ARB_explicit_attrib_location is enabled

#version 120
#extension GL_ARB_explicit_attrib_location: require
in vec4 color;

void main()
{
	in vec4 foo;

	gl_FragColor = color;
}
