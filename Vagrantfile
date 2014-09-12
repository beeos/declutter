Vagrant::Config.run do |config|
 
    config.vm.box = "precise64"
    config.vm.box_url = "http://files.vagrantup.com/precise64.box"
    config.vm.host_name = "machine"
 
    config.vm.forward_port 9000, 9000

    config.vm.provision "ansible" do |ansible|
        ansible.verbose = "v"
        ansible.playbook = "playbooks/create_dev_server.yml"
    end

end
