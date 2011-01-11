// [config]
// expect_result: fail
// glsl_version: 1.10
// extension: GL_ARB_explicit_attrib_location
// [end config]
//
// 'location' must be an integer constant

#version 110
#extension GL_ARB_explicit_attrib_location: require
layout(location = 1 - 1) out vec4 color;

void main()
{
	color = vec4(1.0);
}
