class HomeController < ApplicationController
  def index
    @notices = Notice.order("id desc").limit(5)
  end
end
