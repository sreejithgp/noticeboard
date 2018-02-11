class HomeController < ApplicationController
  def index
    @notices = Notice.all.limit(5)
  end
end
