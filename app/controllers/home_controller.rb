class HomeController < ApplicationController
  def index
    @notices = Notice.all #location based filter here
    @tags = ActsAsTaggableOn::Tag
      .where(id: ActsAsTaggableOn::Tagging
      .where(taggable_id: @notices.pluck(:id)).pluck(:tag_id)).pluck(:name)
    @notices = @notices.tagged_with(params[:tags]) if params[:tags].present?
    @notices = @notices.order("id desc").limit(5)
  end
end
