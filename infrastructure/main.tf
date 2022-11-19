terraform {
  cloud {
    organization = "raspberry-kubernetes-cluster"

    workspaces {
      tags = ["tomondre-portfolio-angular"]
    }
  }
}


module "portfolio_angular_deployment" {
  source            = "git::https://github.com/tomondre/raspberry-kubernetes-cluster.git//terraform-modules/reusable-modules/full-deployment"
  health_check_path = "/"
  image_tag         = var.image_tag
  image_url         = "tomondre/portfolio-angular"
  service_name      = "portfolio"
  port              = 80
}

variable "image_tag" {}
