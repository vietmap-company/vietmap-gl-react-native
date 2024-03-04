require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

$RNMBGL = Object.new

def $RNMBGL._add_spm_to_target(project, target, url, requirement, product_name)
  pkg_class = Xcodeproj::Project::Object::XCRemoteSwiftPackageReference
  ref_class = Xcodeproj::Project::Object::XCSwiftPackageProductDependency
  pkg = project.root_object.package_references.find { |p| p.class == pkg_class && p.repositoryURL == url }
  if !pkg
    pkg = project.new(pkg_class)
    pkg.repositoryURL = url
    pkg.requirement = requirement
    project.root_object.package_references << pkg
  end
  ref = target.package_product_dependencies.find { |r| r.class == ref_class && r.package == pkg && r.product_name == product_name }
  if !ref
    ref = project.new(ref_class)
    ref.package = pkg
    ref.product_name = product_name
    target.package_product_dependencies << ref
  end
end

def $RNMBGL.post_install(installer)
end

Pod::Spec.new do |s|
  s.name		= "vietmap-react-native"
  s.summary		= "React Native Component for Vietmap GL Native"
  s.version		= package['version']
  s.authors		= { "Vietmap" => "maps-api.support@vietmap.vn" }   
  s.homepage    	= "https://maps.vietmap.vn"
  s.source      	= { :git => "https://github.com/vietmap-company/vietmap-gl-react-native.git" }
  s.license     	= "MIT"
  s.platform    	= :ios, "8.0"

  s.dependency 'React-Core'
  s.dependency 'React'

  s.dependency 'VietMap', '1.1.0'

  s.subspec 'DynamicLibrary' do |sp|
    sp.source_files	= "ios/RCTMGL/**/*.{h,m}"
  end
end
