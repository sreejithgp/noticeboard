module HomeHelper
  def random_style
    "transform: rotate(#{rand(-5..5)}deg); -ms-transform: rotate(#{rand(-5..5)}deg); -webkit-transform: rotate(#{rand(10)}deg);" 
  end
end
