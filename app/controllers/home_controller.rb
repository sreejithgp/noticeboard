class HomeController < ApplicationController
  def index
    @notices = Notice.near([params[:search_latitude], params[:search_longitude]], 150, units: :km, order: nil)
    @notices.where("created_at < ?", (Time.now - 1.week)).delete_all
    @tags = ActsAsTaggableOn::Tag
      .where(id: ActsAsTaggableOn::Tagging
      .where(taggable_id: @notices.pluck(:id)).pluck(:tag_id)).pluck(:name)
    @notices = @notices.tagged_with(params[:tags]) if params[:tags].present?
    @notices = @notices.order("RANDOM()").limit(5)
  end
end
